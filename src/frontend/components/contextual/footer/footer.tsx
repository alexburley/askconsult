import Box from "@components/library/box";
import Link from "@components/library/link";

import SITE_MAP_ITEMS from "./site-map-items";

export type FooterProps = Record<string, unknown>;
const Footer = (props_: FooterProps) => {
  return (
    // TODO: Candidate for a box
    <footer className="mt-auto flex flex-col border-t-[1px] border-teal-100 bg-slate-100 font-light text-slate-800">
      <Box className="justify-between gap-12 px-10 py-5 md:px-20">
        <Box className="items-center gap-4 pl-2 sm:flex-row sm:items-start sm:pl-4 ">
          {SITE_MAP_ITEMS.map(([header, list]) => (
            <div className="w-40" key={header}>
              <h3 className="font-light tracking-wide">{header}</h3>
              <ul className="mt-4 list-none p-0">
                {list.map(([title, href, opts = {}]) => (
                  <li key={title}>
                    <Link href={href} external={opts.external}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Box>
        <Box className="mx-auto mt-0">
          <div className="w-48">
            <p>
              <b>Need to get in touch?</b>
            </p>
            <br />
            <p>
              {/* CLICKABLE style */}
              <span className="cursor-pointer font-semibold text-teal-800">
                support@askconsult.io
              </span>
            </p>
          </div>
        </Box>
      </Box>
      <div className="m-auto w-full border-t border-teal-300 p-4 text-center">
        <span>Copyright © askconsult.io 2022. </span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
