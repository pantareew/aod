import Image from "next/image";

export default function FeaturedAbout({ content }) {
  const { kicker, heading, description, image, listItems } = content.fields;

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 xl:col-end-7 col-end-13 2xl:col-end-8">
        <h4 className="uppercase text-secondary font-epilogue font-bold tracking-widest text-lg my-3">
          {kicker}
        </h4>
        <h1 className="capitalize text-gray-900 font-epilogue text-4xl sm:text-5xl md:text-6xl font-semibold leading-[72px]">
          {heading}
        </h1>
        <p className="font-kumbh text-gray text-xl mt-8 mb-8 md:mb-10 lg:mb-12 leading-8">
          {description}
        </p>
        <div className="flex items-center">
          <Image
            className="rounded-3xl"
            src={"https:" + image.fields.file.url}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            style={{
              width: "200px",
              height: "140px",
              objectFit: "cover",
            }}
          />
          <div className="ml-8">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center my-6">
                <input
                  type="checkbox"
                  checked
                  className="accent-primary h-5 w-6"
                />
                <span className="mx-3 text-gray-900 font-kumbh">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 xl:mt-0 h-[60vh]  xl:h-full relative col-start-1 xl:col-start-8 2xl:col-start-9 col-end-13  ">
        <Image
          className="rounded-3xl w-full h-full object-cover"
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
        <div className="absolute flex bottom-0">
          <div className="relative">
            <svg
              className="sm:w-[316px] w-[200px]"
              xmlns="http://www.w3.org/2000/svg"
              height="200"
              viewBox="0 0 316 216"
              fill="none"
            >
              <g filter="url(#filter0_d_3708_30)">
                <path
                  d="M266 20H50C38.9543 20 30 28.9543 30 40V156C30 167.046 38.9543 176 50 176H266C277.046 176 286 167.046 286 156V40C286 28.9543 277.046 20 266 20Z"
                  fill="#171717"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3708_30"
                  x="0"
                  y="0"
                  width="316"
                  height="216"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.071 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3708_30"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3708_30"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="absolute right-0 top-14 sm:top-7 sm:right-8 flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 58 58"
                fill="none"
              >
                <path
                  d="M29 58C45.0163 58 58 45.0163 58 29C58 12.9837 45.0163 0 29 0C12.9837 0 0 12.9837 0 29C0 45.0163 12.9837 58 29 58Z"
                  fill="#F35162"
                />
              </svg>
              <h1 className="text-4xl sm:text-6xl font-semibold ml-5 mr-8">
                10+
              </h1>
              <div className="absolute ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M11.2806 8.73171L10.8825 11.0087L12.9674 9.93398L15.0522 11.0087L14.6542 8.73171L16.341 7.12049L14.0103 6.78805L12.9637 4.71777L11.9209 6.78805L9.59375 7.12049L11.2806 8.73171Z"
                    fill="white"
                  />
                  <path
                    d="M21.2536 1.97828C21.2566 1.6516 21.2566 1.33039 21.2536 1.01464V0H4.61942V1.01464C4.61942 1.33039 4.61942 1.6516 4.61942 1.97828H0.00342786V2.99292C-0.0567399 5.39691 0.6766 7.75377 2.0901 9.69922C3.2354 11.1502 4.58856 12.4242 6.10586 13.48C6.84431 14.0046 7.53799 14.5895 8.17978 15.2288C9.21971 16.5973 10.4865 17.7774 11.925 18.7181V20.3931H11.4177C10.2076 20.3943 9.04736 20.8753 8.19143 21.7307C7.3355 22.5862 6.85374 23.7461 6.85181 24.9562V25.9709H19.0257V24.9562C19.0245 23.7456 18.5431 22.585 17.6871 21.729C16.831 20.873 15.6704 20.3915 14.4598 20.3903H13.9525V18.7181C15.3885 17.7791 16.6533 16.6014 17.6923 15.236C18.3454 14.5883 19.0523 13.9972 19.8054 13.4691C21.337 12.4174 22.7054 11.1459 23.8667 9.69558C25.2952 7.75773 26.0383 5.39965 25.9788 2.99292V1.97828H21.2536ZM2.07643 4.00757H4.68044C4.75366 6.09651 5.08279 8.16859 5.66047 10.1774C5.71057 10.3423 5.7634 10.5062 5.81713 10.6683C4.75966 9.88418 3.87979 8.88546 3.23515 7.7376C2.59051 6.58975 2.19565 5.31865 2.07643 4.00757ZM14.4635 22.4214C14.9568 22.422 15.4394 22.5662 15.8522 22.8365C16.2649 23.1068 16.5901 23.4914 16.7878 23.9434H9.09241C9.29019 23.4914 9.61532 23.1068 10.0281 22.8365C10.4409 22.5662 10.9234 22.422 11.4168 22.4214H14.4635ZM16.1849 13.8835C15.9932 14.0909 15.8164 14.3116 15.6557 14.5438C14.8661 15.4706 13.951 16.2827 12.9369 16.9566C11.9234 16.2837 11.0087 15.4729 10.2191 14.5475C10.0561 14.3121 9.87685 14.0884 9.68261 13.878C7.15238 10.4279 6.70791 6.10243 6.65235 2.02929H19.2215C19.1696 6.11063 18.7242 10.4352 16.1822 13.8835H16.1849ZM20.0413 10.7148C20.1014 10.5372 20.1588 10.3587 20.2143 10.1774C20.793 8.16871 21.123 6.09663 21.1971 4.00757H23.9022C23.7738 5.33612 23.3629 6.62188 22.697 7.77865C22.0311 8.93543 21.1256 9.93651 20.0413 10.7148Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <h1 className="absolute bottom-16 left-7 sm:left-12 text-base sm:text-2xl font-semibold">
              Years of Experiences
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
