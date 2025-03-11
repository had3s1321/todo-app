export const BouncingCircles = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle
        fill="var(--custom-primary)"
        stroke="var(--custom-primary)"
        strokeWidth="2"
        r="2"
        cx="90"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;95;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle
        fill="var(--custom-primary)"
        stroke="var(--custom-primary)"
        strokeWidth="2"
        r="2"
        cx="100"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;95;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle
        fill="var(--custom-primary)"
        stroke="var(--custom-primary)"
        strokeWidth="2"
        r="2"
        cx="110"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;95;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
};
