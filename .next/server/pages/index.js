"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(6935);
// EXTERNAL MODULE: ./components/more-stories.tsx + 1 modules
var more_stories = __webpack_require__(4800);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/avatar.tsx


function Avatar({ author  }) {
    const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName;
    const name = isAuthorHaveFullName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name || null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-12 h-12 relative mr-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: author.node.avatar.url,
                    layout: "fill",
                    className: "rounded-full",
                    alt: name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xl font-bold",
                children: name
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/date.tsx
var components_date = __webpack_require__(1722);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(9519);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero-post.tsx





function HeroPost({ title , coverImage , date , excerpt , author , slug  }) {
    const decodedExcerpt = excerpt.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "md:mb-10 w-full rounded-lg p-7 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-8 md:mb-16 ",
                children: coverImage && /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    coverImage: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:grid md:grid-cols-3 md:gap-x-5 lg:gap-x-5 mb-20 md:mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-6xl leading-tight",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${slug}`,
                                    className: "hover:underline",
                                    dangerouslySetInnerHTML: {
                                        __html: title
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-lg leading-relaxed mb-4",
                                dangerouslySetInnerHTML: {
                                    __html: decodedExcerpt
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                author: author
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4011);
;// CONCATENATED MODULE: ./pages/index.tsx






function Index({ allPosts: { edges  } , preview  }) {
    const heroPost = edges[1]?.node;
    const morePosts = edges;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "TEDXTRONDHEIM"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative isolate h-screen flex ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute inset-x-0 -top-40  transform-gpu overflow-hidden blur-3xl sm:-top-80",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                                    style: {
                                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "m-auto ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                className: "text-2xl md:text-4xl lg:text-9xl font-bold tracking-tight text-gray-900 dark:text-slate-100 ",
                                                children: [
                                                    "Welcome to ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-red-600",
                                                        children: "TEDx"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "font-light",
                                                        children: "Trondheim"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400",
                                                children: [
                                                    "Learn about ideas worth spreading by attending our ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "TEDx"
                                                    }),
                                                    " events, watching our ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "TEDx"
                                                    }),
                                                    " talks and reading our ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-red-600 font-bold",
                                                        children: "TEDx"
                                                    }),
                                                    " blogs."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden sm:mt-8 sm:flex sm:justify-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                                            children: [
                                                "Announcing our next round of talks.",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    className: "font-semibold text-indigo-600",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "absolute inset-0",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "Watch ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "→"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute inset-x-0 top-[calc(100%-13rem)]  transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
                                    style: {
                                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-5 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center mb-16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: " lg:text-7xl leading-auto font-bold  text-gray-900 dark:text-slate-100 sm:text-4xl",
                                    children: "Up coming event"
                                })
                            }),
                            heroPost && /*#__PURE__*/ jsx_runtime_.jsx(HeroPost, {
                                title: heroPost.title,
                                coverImage: heroPost.featuredImage,
                                date: heroPost.date,
                                author: heroPost.author,
                                slug: heroPost.slug,
                                excerpt: heroPost.excerpt
                            }),
                            morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                                posts: morePosts,
                                title: "More Events"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async ({ preview =false  })=>{
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
    return {
        props: {
            allPosts,
            preview
        },
        revalidate: 10
    };
};


/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,935,830], () => (__webpack_exec__(7417)));
module.exports = __webpack_exports__;

})();