import './styles.scss';

const menuItems = document.querySelectorAll('.has-submenu') as NodeListOf<HTMLElement>;

Array.prototype.forEach.call(menuItems, function(el: HTMLElement) {
  const link = el.querySelector('a') as HTMLAnchorElement;
  const submenu = el.querySelector('ul') as HTMLUListElement;

  link.addEventListener("click", function(event: Event) {
    const isExpanded = el.classList.contains("open");

    if (isExpanded) {
      el.classList.remove("open");
      link.setAttribute('aria-expanded', "false");
    } else {
      el.classList.add("open");
      link.setAttribute('aria-expanded', "true");
    }

    event.preventDefault();
  });

  el.addEventListener("mouseenter", function() {
    el.classList.add("open");
    link.setAttribute('aria-expanded', "true");
  });

  el.addEventListener("mouseleave", function() {
    el.classList.remove("open");
    link.setAttribute('aria-expanded', "false");
  });

  submenu.addEventListener("focusout", function(event: FocusEvent) {
    // Check if the focus is outside the submenu
    if (!el.contains(event.relatedTarget as Node)) {
      el.classList.remove("open");
      link.setAttribute('aria-expanded', "false");
    }
  });
});
