import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // Profile clicked on and updates count
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // Following count of logged in user
      { ...profile, following_count: profile.following_count + 1 }
    : // Unchanged for profiles not owned by user
      profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? 
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? 
      { ...profile, following_count: profile.following_count - 1 }
    : 
      profile;
};

// To accept data object returned by the API on login
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};
// Function to indicate if users token needs refreshing or not
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};
// Removal of localstorage when user logs out or refresh token expires
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};