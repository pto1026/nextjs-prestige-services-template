import styles from './logo.module.scss'

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#38d9a9"
      viewBox="0 0 256 256"
      className={styles.logo}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        stroke="#38d9a9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <path
        d="M16.9,140.4l37.7,35.3a32,32,0,0,0,38,4.3L244,92,225.4,69.2a32,32,0,0,0-41-7.3L140,88,80,68,63.5,75.1a8,8,0,0,0-2.2,13.3L92,116,64,132,36,120l-16.8,7.2A8,8,0,0,0,16.9,140.4Z"
        fill="none"
        stroke="#38d9a9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  );
}
