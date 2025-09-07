import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        style={{ width: "80px" }}
        src="https://cdn.builder.io/api/v1/image/assets%2F66fa4205ed5a4558a776cf72c5db088b%2F19a91240c07c4229bbfff8458cc79a75"
        alt=""
      />
    </>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://www.youtube.com/@JBWEBDEVELOPER",
    icon: <></>,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
