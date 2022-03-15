import { notionClientId, notionSecret, notion } from '../notion.js';
import axios from 'axios';

const redirectToOauth = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.write(`https://api.notion.com/v1/oauth/authorize?owner=user&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-callback&client_id=${notionClientId}`);
  res.end();
  console.log('hheee');
};

const OauthCallback = async (req, res) => {
  try {
    const { code, redirect_uri } = req.query; // code from service provider which is appended to the frontend's URL
    const client_id = notionClientId;
    const client_secret = notionSecret;
    // The client_id and client_secret should always be private, put them in the .env file
    const grant_type = "authorization_code"; // this tells the service provider to return a code which will be used to get a token for making requests to the service provider
    const url = "https://api.notion.com/v1/oauth/token"; // link to api to exchange code for token.
    const { data } = await axios({
      url,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      auth: {
        username: client_id,
        password: client_secret
      },
      data: {
        redirect_uri,
        code,
        grant_type,
      }
    });
    console.log(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify('response'));
    res.end();
  //   const tokenFromGoogle = data.access_token;
  //   const urlForGettingUserInfo = "https://www.googleapis.com/oauth2/v2/userinfo";
  //   const userData = await axios({
  //     urlForGettingUserInfo,
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${tokenFromGoogle}`,
  //     },
  //   });
  //   const body = {
  //     username: userData.data.username,
  //     email: userData.data.email,
  //     serviceProvider: "google",
  //   };
  //   await User.create(body); // store data to database - here you can add your logic for either signing up or signing in a user. I am assuming I have a model called User, I am using Sequelize's create method to insert the user data into this model...
  //   const ourOwnToken = jwt.encode(body); // create token with the body variable above
  //   return res.status(200).json({
  //     success: true,
  //     token: ourOwnToken,
  //   });
  } catch (err) {
    console.log('errrorrr');
    return res.status(500).json({
      success: false,
      err,
    });
   }
// };
  }

//export controller functions
export {
    redirectToOauth,
    OauthCallback
};