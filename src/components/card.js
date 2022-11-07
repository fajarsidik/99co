import React from "react";
import createDOMPurify from "dompurify";
export default function Card({
  onClickShowDescription,
  className,
  pic,
  title,
  address,
  description,
  isShowDescription
}) {
  const DOMPurify = createDOMPurify();

  return (
    <div className={`card ${className ? className : ""}`}>
      <div className={"ribbon magenta font-12 font-semibold"}>
        LAUNCING SOON
      </div>
      <div className={"feature_image"}>
        <img src={pic} alt={title} />
      </div>

      <div className={"card_body p-4"}>
        <div className={"flex justify-between"}>
          <div>
            <div className={"flex mb-2"}>
              <img src={"building-icon.svg"} alt={"99.co"} />
              <div className={"ml-2"}>
                <h2 className={"mb-1"}>{title}</h2>
                <p className={"font-14 text-grey"}>{address}</p>
              </div>
            </div>
            <div className={"flex flex-column"}>
              <p className={"font-16"}>Condo · 2021 · Freehold</p>
              <p className={"font-16"}>231 units · 1, 2, 3, 4 bedrooms</p>
            </div>
          </div>

          <div className={"price"}>
            <h3 className={"mb-1"}>$2,609 - $3,043 psf</h3>
            <p className={"font-14 text-grey text-right"}>Prices from $1.99M</p>
          </div>
          {isShowDescription && (
            <div className={"description p-2"}>
              <div className={"flex justify-end"}>
                <a
                  href="javascript;"
                  className={"font-semibold text-blue text-decoration-none"}
                >
                  X Close description
                </a>
              </div>
              <div
                className={"display-linebreak"}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description)
                }}
              />
            </div>
          )}
        </div>

        <div className={"flex justify-end"}>
          <a
            href="javascript;"
            className={"font-semibold text-blue text-decoration-none"}
            onClick={onClickShowDescription}
          >
            See description
          </a>
        </div>
      </div>
    </div>
  );
}
