interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C120 80 360 20 480 40C600 60 720 80 840 60C960 40 1080 30 1200 40C1320 50 1380 55 1440 60L1440 120L0 120V60Z"
          className="fill-dark-light"
        />
        <path
          d="M0 40C120 60 360 0 480 20C600 40 720 60 840 40C960 20 1080 10 1200 20C1320 30 1380 35 1440 40L1440 60L0 60V40Z"
          className="fill-surface"
        />
        <path
          d="M0 80C120 100 360 40 480 60C600 80 720 100 840 80C960 60 1080 50 1200 60C1320 70 1380 75 1440 80L1440 120L0 120V80Z"
          className="fill-dark"
        />
      </svg>
    </div>
  );
}
