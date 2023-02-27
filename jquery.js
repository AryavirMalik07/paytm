$(document).ready(function (direction) {
  $(".animate-wallet").waypoint(
    function (direction) {
      $(".animate-wallet").addClass("animated fadeInUp");
      $(".animate-para").show(1500);
    },
    {
      offset: "900px",
    }
  );

  $(".animate-wallet-2").waypoint(
    function (direction) {
      $(".animate-wallet-2").addClass("animated zoomIn");
    },
    {
      offset: "1500px",
    }
  );
});
