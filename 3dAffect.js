function Source() {
        let[offset,setOffset] = (0,
        react.useState)(0)
          , [scroll,setScroll] = (0,
        react.useState)(0)
          , progress = Math.max(0, Math.min((scroll - waypoint) / scrollSize, 1))
          , rotateProps = {
            transform: `translate3d(0,calc(${ease(progress) * offset}px + 3.8%),0) scale(${Math.min(.94 + .16 * progress, maxScale)}) rotateX(${(progress - 1) * 69}deg)`
        };
        return (0,
        react.useEffect)(()=>{
            let sourceEl = document.getElementById("display-src")
              , targetEl = document.getElementById("display-target")
              , onResize = ()=>{
                setOffset(targetEl.getBoundingClientRect().top + 30 - sourceEl.getBoundingClientRect().top),
                window.innerHeight < 600 ? (waypoint = 100,
                scrollSize = 1e3,
                maxScale = 1) : window.innerWidth < 800 && (scrollSize = 1e3,
                maxScale = 1)
            }
            ;
            return window.addEventListener("resize", onResize),
            onResize(),
            ()=>window.removeEventListener("resize", onResize)
        }
        , []),
        (0,
        react.useEffect)(()=>{
            let onScroll = ()=>{
                setScroll(window.document.documentElement.scrollTop)
            }
            ;
            return window.addEventListener("scroll", onScroll),
            onScroll(),
            ()=>window.removeEventListener("scroll", onScroll)
        }
        , []),
        (0,
        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [(0,
            jsx_runtime.jsx)("div", {
                className: display_module_default().source,
                id: "display-src",
                children: (0,
                jsx_runtime.jsx)("img", {
                    alt: "Ecommerce App",
                    src: "/static/images/commerce/ecommerce.png",
                    style: rotateProps
                })
            }), (0,
            jsx_runtime.jsx)("img", {
                alt: "Display",
                className: display_module_default().display,
                height: "240",
                src: "/static/images/commerce/display.png",
                style: {
                    opacity: Math.max(1 - 1.5 * progress, 0)
                },
                width: "860"
            })]
        })
    }
    function Target() {
        return (0,
        jsx_runtime.jsx)("div", {
            className: display_module_default().target,
            id: "display-target"
        })
    }