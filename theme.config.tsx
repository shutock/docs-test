import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        gap: "0.25rem",
        alignItems: "center",
      }}
    >
      <img
        src="/nomis-logo.svg"
        style={{
          inlineSize: "1.5rem",
          blockSize: "1.5rem",
          margin: "-0.25rem 0",
          borderRadius: "50%",
        }}
      />
      <span>Nomis Labs</span>
    </div>
  ),
  chat: {
    link: "https://discord.com/nomis",
  },
  banner: {
    text: "Banner text",
    dismissible: false,
  },
  primaryHue: {
    dark: 200,
    light: 200,
  },
  sidebar: {
    toggleButton: true,
  },
  direction: "ltr",
  primarySaturation: {
    dark: 80,
    light: 100,
  },
  footer: {
    text: "Docs Footer",
  },
};

export default config;
