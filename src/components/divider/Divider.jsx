const Divider = () => {
  return (
    <svg
      className="divider"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 135 30 "
      preserveAspectRatio="none"
    >
      <g className="wave parallax1">
        <use href="#gentle-wave" x="50" y="0" fill="var(--wave-1)" opacity="0.85" />
      </g>
      <g className="wave parallax2">
        <use href="#gentle-wave" x="50" y="3" fill="var(--wave-2)" opacity="0.7" />
      </g>
      <g className="wave parallax3">
        <use href="#gentle-wave" x="50" y="9" fill="var(--wave-3)" opacity="0.3" />
      </g>
      <g className="wave parallax4">
        <use href="#gentle-wave" x="50" y="6" fill="var(--wave-4)" />
      </g>
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
        <linearGradient
          id="divider_gradient_hero"
          x1="-345.889"
          y1="-12.7304"
          x2="-301.171"
          y2="248.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E9FF" />
          <stop offset="0.325521" stopColor="#F5F7FF" />
          <stop offset="0.627604" stopColor="#F2F5FF" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
        <linearGradient
          id="divider_gradient_footer"
          x1="-345.889"
          y1="-12.7304"
          x2="-301.171"
          y2="248.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#505D84" />
          <stop offset="0.34496" stopColor="#38466B" />
          <stop offset="0.556043" stopColor="#212F53" />
          <stop offset="1" stopColor="#0A1A3D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Divider;
