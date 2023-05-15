/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(https://bertilserveau.dk/Asset%2053.svg) 0 0, pointer",
      },
      colors: {
        white100: "#FFFFFF",
        yellow200: "#FFFFFD",
        yellowbase: "#FFFFF7",
        yellow400: "#F5F5C6",
        yellow500: "#E2E263",
        orange100: "#F7B9AA",
        orange200: "#F18970",
        orangebase: "#EC6342",
        orange400: "#BE4224",
        orange500: "#A73215",
        greenish: "#BBB49B",
        clay: "#EBE8D8",
        brown100: "#E4D0C2",
        brown200: "#B7815C",
        brownbase: "#A56133",
        brown400: "#633A1F",
        brown500: "#321D0F",
        matte100: "#321E1E",
        matte200: "#63534F",
        matte300: "#786D6D",
        grey500: "#9A9A9A",
        grey400: "#D5D5D5",
        greybase: "#F3F3F3",
        grey200: "#FAFAFA",
        grey100: "#FEFEFE",
        black100: "#9C9B9B",
        black200: "#616060",
        blackbase: "#262525",
        black400: "#171616",
        black500: "#000000",
      },
    },
    fontSize: {
      h1: ["3.583rem", { lineHeight: "125%" }],
      h2: ["2.986rem", { lineHeight: "125%" }],
      h3: ["2.488rem", { lineHeight: "125%" }],
      h4: ["2.074rem", { lineHeight: "125%" }],
      h5: ["1.782rem", { lineHeight: "125%" }],
      h6: ["1.44rem", { lineHeight: "125%" }],
      titlebxs: ["5.16rem", { lineHeight: "125%" }],
      titles: ["6.192rem", { lineHeight: "125%" }],
      titlem: ["7.43rem", { lineHeight: "125%" }],
      titlexl: ["15.6rem", { lineHeight: "125%" }],
      lcopy: ["1.2rem", { lineHeight: "125%" }],
      copy: ["1rem", { lineHeight: "125%" }],
      scopy: ["0.833rem", { lineHeight: "125%" }],
      xscopy: ["0.694rem", { lineHeight: "125%" }],
      deskButtonPrimary: ["2rem", { lineHeight: "2.063rem" }],
      deskButtonSecondary: ["1rem", { lineHeight: "100%" }],
      mobileH1: ["36px", { lineHeight: "125%" }],
      mobileH2: ["31px", { lineHeight: "125%" }],
      mobileH3: ["28px", { lineHeight: "125%" }],
      mobileH4: ["24px", { lineHeight: "125%" }],
      mobileH5: ["22px", { lineHeight: "125%" }],
      mobileP: ["18px", { lineHeight: "1.875rem" }],
      mobilesmall: ["16px", { lineHeight: "1.875rem" }],
      mobilexs: ["12px", { lineHeight: "1.875rem" }],
      link: ["1rem", { lineHeight: "125%" }],
      mobileButtonPrimary: ["1.25rem", { lineHeight: "2.063rem" }],
    },
    fontFamily: {
      normal: ["var(--roca-regular)"],
      tynd: ["var(--rocaHv-thin)"],
      let: ["var(--roca-light)"],
      tyk: ["var(--roca-bold)"],
      megettyk: ["var(--rocaHv-heavy)"],
      ssort: ["var(--rocaBl-black)"],
      copy: ["var(--eb-regular)"],
    },
    borderRadius: {
      cornerRound: "10px",
    },
    boxShadow: {
      "3xl": "3px 3px 3px 3px rgba(0, 0, 0, 0.8)",
    },
  },
  plugins: [],
};
