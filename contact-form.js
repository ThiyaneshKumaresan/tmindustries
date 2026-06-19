document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  const showMessageModal =
    window.showMessageModal ||
    function (title, msg, type) {
      alert(msg);
    };

  const EMAILJS_PUBLIC_KEY = "8d-k4wk6F_BMcWHz5"; // replace with your EmailJS public key
  const EMAILJS_SERVICE_ID = "service_iebf4dm"; // replace with your EmailJS service id
  const EMAILJS_TEMPLATE_ID = "template_0t1268r"; // replace with your EmailJS template id

  // Initialize EmailJS (emailjs object is loaded from CDN included in index.html)
  if (window.emailjs && typeof emailjs.init === "function") {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (e) {
      // ignore init errors
    }
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9+\-\s]{7,20}$/.test(phone);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = (form.querySelector("#name") || {}).value?.trim() || "";
    const phone = (form.querySelector("#phone") || {}).value?.trim() || "";
    const email = (form.querySelector("#email") || {}).value?.trim() || "";
    const message = (form.querySelector("#message") || {}).value?.trim() || "";
    const submitBtn = form.querySelector(".submit-btn");

    if (!name || !phone || !email || !message) {
      showMessageModal(
        "Validation Error",
        "Please fill in all required fields.",
        "error",
      );
      return;
    }

    if (!isValidEmail(email)) {
      showMessageModal(
        "Invalid Email",
        "Please enter a valid email address.",
        "error",
      );
      return;
    }

    if (!isValidPhone(phone)) {
      showMessageModal(
        "Invalid Phone Number",
        "Please enter a valid phone number.",
        "error",
      );
      return;
    }

    const originalButtonText = submitBtn ? submitBtn.innerHTML : "Submit";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending...";
    }

    const templateParams = {
      name,
      phone,
      email,
      message,
    };

    // Ensure emailjs is available
    if (!window.emailjs || typeof emailjs.send !== "function") {
      console.error("EmailJS not loaded");
      showMessageModal(
        "Error",
        "Failed to send enquiry. Please try again later.",
        "error",
      );
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalButtonText;
      }
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      form.reset();
      showMessageModal(
        "Success!",
        "Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.",
        "success",
      );
    } catch (err) {
      console.error("EmailJS send error:", err);
      showMessageModal(
        "Error",
        "Failed to send enquiry. Please try again later.",
        "error",
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalButtonText;
      }
    }
  });
});
