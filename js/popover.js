(function () {
  "use strict";

  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  popovers.forEach((popover) => {
    new bootstrap.Popover(popover);
  });
})();
