//  console.log("notificationPopup.js is working");
setInterval(printnotification, 10000);
function printnotification() {
  var randomnumber = Math.floor(Math.random() * 4);
  var notificationss = ["Due date for your gas bill is on 7/6/2023 !!",
  "Due date for your electricity bill is on 7/6/2023 !!",
  "Due date for your water bill is on 7/6/2023 !!",
  "Due date for your telephone bill is on 7/6/2023 !!" 
];
  var notificationsound = new Audio("sound/notify.wav");
  notificationsound.play();
  $.bootstrapGrowl(
    notificationss[randomnumber],
    {
      ele: "body", // which element to append to
      type: "info", // (null, 'info', 'error', 'success')
      offset: { from: "top", amount: 200 }, // 'top', or 'bottom'
      align: "right", // ('left', 'right', or 'center')

      width: 300, // (integer, or 'auto')
      delay: 3000,
      allow_dismiss: true,
      stackup_spacing: 10, // spacing between consecutively stacked growls.
    }
  );
}