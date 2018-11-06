import FBSDK from "react-native-fbsdk";

const { AccessToken, ShareDialog } = FBSDK;

/**
 * Will return the current access token for a connected user
 * and null otherwise
 */
export async function isUserConnected() {
  const data = await AccessToken.getCurrentAccessToken();

  if (data) {
    return data.accessToken.toString();
  }
  return null;
}

// TODO CLEAN THIS AFTER ACTUAL IMPLEMENATION
// const shareLinkContent = {
//   contentType: "link",
//   contentUrl: "https://facebook.com",
//   contentDescription: "Wow, check out this great site!"
// };

/**
 * Share the link using the share dialog.
 * @param {object} shareLinkContent the object which will be shared
 */
export function shareWithShareDialog(shareContent) {
  ShareDialog.canShow(shareContent)
    .then(function(canShow) {
      if (canShow) {
        return ShareDialog.show(shareContent);
      }
    })
    .then(
      function(result) {
        if (result.isCancelled) {
          console.log("Share cancelled");
        } else {
          console.log("Share success with postId: " + result.postId);
        }
      },
      function(error) {
        console.log("Share fail with error: " + error);
      }
    );
}

export function shareReadingUpdate() {
  throw new Error("Not yet implemented");
}

export function shareNewReadingUpdate() {
  throw new Error("Not yet implemented");
}

export function shareGroupUpdate() {
  throw new Error("Not yet implemented");
}
