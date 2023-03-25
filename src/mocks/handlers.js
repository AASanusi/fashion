import { rest } from "msw";

const baseURL = "https://fshn-api.herokuapp.com/";

/**
 * Mocked API request handlers intercept test request.
 */
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 4,
                username: "Kanye",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 4,
                profile_image: "https://res.cloudinary.com/dr2oyv6h1/image/upload/v1/media/images/kanye_profile_umorn2"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];