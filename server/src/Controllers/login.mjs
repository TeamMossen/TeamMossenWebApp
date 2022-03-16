import { notionClientId, notionSecret, notion, accessTokenSecret } from '../notion.js';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { GetUserById } from '../Database/user.mjs';

const redirectToOauth = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.write(`https://api.notion.com/v1/oauth/authorize?owner=user&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-callback&client_id=${notionClientId}`);
  res.end();
  console.log('hheee');
};

const OauthCallback = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  try {
    const { code } = req.query; // code from service provider which is appended to the frontend's URL
    const grant_type = "authorization_code"; // this tells the service provider to return a code which will be used to get a token for making requests to the service provider
    const url = "https://api.notion.com/v1/oauth/token"; // link to api to exchange code for token.

    const options = {
      method: "post",
      url: "https://api.notion.com/v1/oauth/token",
      auth: {
        username: notionClientId,
        password: notionSecret,
      },
      data: {
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:3000/oauth-callback",
      },
      headers: { "Content-Type": "application/json" },
    };

    let tokenResponse = await axios(options);

    let userData = {
      name: tokenResponse.data.owner.user.name,
      id: tokenResponse.data.owner.user.id,
    }
    console.log(userData.id);
    const accessToken = jwt.sign(userData, accessTokenSecret);
    //console.log(accessToken);
    GetUserById("12f57bfc-6c43-4960-9930-094a6c734bc7");
    return res.status(200).json({
      success: true,
      token: accessToken,
    });

    // axios(options).then((data) => {
    //   return {
    //     name: data.data.owner.user.name,
    //     id: data.data.owner.user.id,
    //   };
    // })
    // .then((userData) => {
    // jwt.sign(userData, accessTokenSecret)})

    // return res.status(200).json({
    //   success: true,
    //   token: userToken,
    // });

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
    console.log(err);
    return res.status(500).json({
      success: false,
      err,
    });}}
  //  }
  // }
  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next();
    })
  }
//export controller functions
export {
    redirectToOauth,
    OauthCallback
}