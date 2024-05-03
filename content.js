var intervalId;

function clearSessionAndReload() {
  // 세션 저장소 지우기
  sessionStorage.clear();
  localStorage.clear();
  console.log("함수 실행됨");
  // 모든 쿠키 삭제
  // document.cookie.split("; ").forEach(function (c) {
  //   document.cookie =
  //     c.replace(/=.*/, "") + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  // });

  Cookies.remove("wcs_bt");

  // 페이지 새로고침
  location.reload();
}

if (intervalId) {
  console.log("중복 해제");
  clearInterval(intervalId);
}

// function clearSessionAndReload() {
//   const windowId = chrome.windows.create({
//     url: "https://smartstore.naver.com/golfspot_official/products/6063896626",
//     incognito: true,
//   });

//   setTimeout(() => {
//     chrome.windows.remove(windowId);
//   }, 3000);
// }

// if (intervalId) {
//   console.log("중복 해제");
//   clearInterval(intervalId);
// }

intervalId = setInterval(clearSessionAndReload, 10000);
