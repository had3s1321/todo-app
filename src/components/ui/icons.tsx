interface IconProps {
  large?: boolean | undefined;
  light?: boolean | undefined;
  dark?: boolean | undefined;
}

export const ArrowRightIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpIcon = ({ large }: IconProps) => {
  return (
    <svg
      width={large ? "24" : "18"}
      height={large ? "24" : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14.25V3.75"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 9L9 3.75L14.25 9"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowsIcon = ({ large }: IconProps) => {
  return (
    <svg
      width={large ? "24" : "18"}
      height={large ? "24" : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_646_2051)">
        <path
          d="M3.75 6.75L1.5 9L3.75 11.25"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 3.75L9 1.5L11.25 3.75"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 14.25L9 16.5L6.75 14.25"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 6.75L16.5 9L14.25 11.25"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 9H16.5"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 1.5V16.5"
          stroke="#25282B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_646_2051">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CalendarIcon = ({ large }: IconProps) => {
  return (
    <svg
      width={large ? "24" : "18"}
      height={large ? "24" : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 6.75V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V6.75M2.25 6.75V5.625C2.25 3.96815 3.59315 2.625 5.25 2.625H12.75C14.4069 2.625 15.75 3.96815 15.75 5.625V6.75M2.25 6.75H15.75M12 1.5V3.75M6 1.5V3.75"
        stroke="#090003"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckIcon = ({ light }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke={light ? "#FFFFFF" : "#25282B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckIconSmall = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4.5L6.75 12.75L3 9"
        stroke="#717171"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronUpIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15L12 9L6 15"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#25282B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditTaskIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.96867 13.9157L13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157ZM18.5381 6.59831L17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.8382 6.06697L17.7862 9.93612L18.5381 9.19909C19.2705 8.48112 19.2705 7.31628 18.5381 6.59831ZM4.89998 14.8287L12.9069 6.97989L16.8549 10.849L8.8093 18.7357L8.70228 18.8317C8.4067 19.0745 8.03222 19.2088 7.64282 19.2088L4.33345 19.2084L4.41707 15.9305C4.42814 15.5169 4.60126 15.1215 4.89998 14.8287ZM21 19.8545C21 19.498 20.7052 19.2089 20.3415 19.2089H13.471L13.3816 19.2148C13.0602 19.2576 12.8125 19.5277 12.8125 19.8545C12.8125 20.211 13.1073 20.5 13.471 20.5H20.3415L20.4308 20.4941C20.7523 20.4514 21 20.1813 21 19.8545Z"
        fill="#090003"
      />
    </svg>
  );
};

export const EditTaskIconSmall = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2747 14.9239H15.0574"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.64128 3.71677C10.194 3.01252 11.0873 3.04927 11.7923 3.60202L12.8348 4.41952C13.5398 4.97227 13.7895 5.82952 13.2368 6.53527L7.02003 14.4665C6.81228 14.732 6.49503 14.8888 6.15753 14.8925L3.75978 14.9233L3.21678 12.587C3.14028 12.2593 3.21678 11.9143 3.42453 11.648L9.64128 3.71677Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.47705 5.20206L12.0726 8.02056"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PowerIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g>
        <path
          d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export const RandomArrows = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#fff"
      height="24"
      width="24"
      viewBox="0 0 24 24"
    >
      <g id="SVGRepo_iconCarrier">
        <g id="Layer_2">
          <path d="M8.7 14.2c-.7.5-1.6.8-2.5.8H4c-.6 0-1 .4-1 1s.4 1 1 1h2.2c1.3 0 2.6-.4 3.7-1.2.4-.3.5-1 .2-1.4-.4-.5-1-.6-1.4-.2M13 10.7c.3 0 .6-.1.8-.3.7-.9 1.8-1.4 3-1.4h.8l-.3.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l2-2c.1-.1.2-.2.2-.3.1-.2.1-.5 0-.8-.1-.1-.1-.2-.2-.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3h-.8c-1.8 0-3.4.8-4.6 2.1-.4.4-.3 1 .1 1.4.2.2.5.2.7.2"></path>
          <path d="m20.7 15.3-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3h-1.5c-1.6 0-2.9-.9-3.6-2.3l-1.2-2.4c-1-2-3.1-3.3-5.4-3.3H4c-.6 0-1 .4-1 1s.4 1 1 1h1.9c1.6 0 2.9.9 3.6 2.3l1.2 2.4c1 2.1 3.1 3.4 5.4 3.4h1.5l-.3.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l2-2c.4-.5.4-1.1 0-1.5"></path>
        </g>
      </g>
    </svg>
  );
};

export const RepeatIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4V10H7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 20V14H17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.49 8.99995C19.9828 7.56674 19.1209 6.28536 17.9845 5.27537C16.8482 4.26539 15.4745 3.55972 13.9917 3.22421C12.5089 2.8887 10.9652 2.93429 9.50481 3.35673C8.04437 3.77916 6.71475 4.56467 5.64 5.63995L1 9.99995M23 14L18.36 18.36C17.2853 19.4352 15.9556 20.2207 14.4952 20.6432C13.0348 21.0656 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7345 6.01547 18.7245C4.87913 17.7145 4.01717 16.4332 3.51 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_646_2136)">
        <path
          d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_646_2136">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TrashIcon = ({ dark }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6H5H21"
        stroke={dark ? "#090003" : "#717171"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
        stroke={dark ? "#090003" : "#717171"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
