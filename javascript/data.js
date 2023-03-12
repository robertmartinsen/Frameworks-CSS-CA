const baseUrl = 'https://api.noroff.dev';

export const registerUrl = `${baseUrl}/api/v1/auction/auth/register`;
export const loginUrl = `${baseUrl}/api/v1/auction/auth/login`;
export const posts = `${baseUrl}/api/v1/social/posts`;


/**
 * API call that registers new user.
 * @async
 * @function
 * @param {Object} userRegistration - The user registration data. insert name, email and password to use this function
 * @returns {Promise} Promise resolves to the registered user data.
 * @throws {Error} If the API request fails.
 */
export async function register(userRegistration) {
    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userRegistration),
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * API call that registers new user.
 * @async
 * @function
 * @param {Object} userLogin - The user login data. insert email and password to use this function
 * @returns {Promise} Promise resolves to the login user data.
 * @throws {Error} If the API request fails.
 */
export async function login(userLogin) {
    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userLogin),
        });

        if (response.status === 200) {
            const { accessToken } = await response.json();
            return accessToken;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

