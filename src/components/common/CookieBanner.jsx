import React from "react";
import CookieConsent from "react-cookie-consent";
const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Reject"
      cookieName="leighton-indusries-cookie-consent"
      style={{
        background: "rgba(31, 41, 55, 0.9)", // bg-gray-800 with opacity
        backdropFilter: "blur(4px)",
        color: "#f3f4f6", // text-gray-100
        alignItems: "center",
        padding: "1rem",
      }}
      buttonStyle={{
        background: "#22c55e", // bg-green-500
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "0.375rem", // rounded-md
        padding: "0.75rem 1.5rem",
      }}
      declineButtonStyle={{
        background: "#4b5563", // bg-gray-600
        color: "white",
        fontSize: "14px",
        borderRadius: "0.375rem", // rounded-md
        padding: "0.75rem 1.5rem",
        marginLeft: "1rem",
      }}
      expires={150}
      enableDeclineButton
      onAccept={() => {
        alert(
          "Cookies accepted! You can now implement your analytics scripts."
        );
      }}
      onDecline={() => {
        alert("Cookies rejected. Analytics scripts will not be loaded.");
      }}
    >
      <h4
        style={{
          fontSize: "1.125rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        We value Your Privacy
      </h4>
      <p style={{ fontSize: "0.875rem" }}>
        We use cookies to enhance your browsing experience, analyze site
        traffic, and personalize content. By clicking "Accept All", you consent
        to our use of cookies.
      </p>
    </CookieConsent>
  );
};

export default CookieBanner;
