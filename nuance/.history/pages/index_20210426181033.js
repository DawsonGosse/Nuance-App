import React from 'react';
import styled from 'styled-components';
import LogoUI from '../comps/Logo';
import {useRouter} from 'next/router';
import ButtonUI from '../comps/Button';
import BlobBig from '../comps/BlobBig';
import BlobSmall from '../comps/BlobSmall';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:flex-end;
align-items:center;
flex-direction:column;
overflow: hidden;
position:relative;
`

const ButtonContainer =styled.div`
display:flex;
width:100vw;
height:200px;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
margin-top:200px;
margin-bottom:20px;
animation-name: FadeIn;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 3s;
`

const Logo = styled.div`

`

export default function LandingPage() {
  return <Container>
    <BlobBig></BlobBig>
    <BlobSmall></BlobSmall>
    <Logo><svg width="338" height="332" viewBox="0 0 338 332" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M265.744 152.346L259.815 115.058C255.777 101.655 255.004 87.2205 253.114 73.3018C238.765 -31.0023 39.8659 -35.2982 94.3377 134.561L98.9772 197.195C99.0632 201.835 102.5 205.615 107.054 206.302L188.16 224.689C193.315 225.376 197.954 221.338 197.954 216.183V201.405C197.954 197.882 201.047 195.133 204.57 195.477L231.72 198.226C238.422 198.913 244.436 193.93 245.037 187.143L247.357 158.962C247.529 157.415 248.818 156.212 250.364 156.298L259.643 156.728C262.221 156.642 266.431 154.752 265.744 152.346ZM203.711 80.0893C202.164 81.9795 200.102 83.4401 197.439 84.2993C193.573 85.588 188.418 85.7599 182.146 84.8148L181.802 84.9007V84.9866C182.146 87.1345 182.317 91.4304 179.31 95.4686C176.991 98.5616 173.21 101.053 168.141 102.686C165.22 103.631 161.783 104.404 158.003 104.92C157.659 106.38 156.8 109.731 154.48 113.254C152.676 115.917 150.442 118.151 147.864 119.783C146.318 120.728 144.685 121.502 142.881 122.103C140.819 122.79 138.671 123.22 136.351 123.392L132.657 123.65L135.836 121.673C135.922 121.588 142.795 117.206 143.74 112.308C143.998 110.934 143.74 109.645 142.967 108.442C141.85 108.7 139.359 109.044 136.351 109.044C130.939 109.044 126.385 107.755 123.292 105.177C119.598 102.256 117.793 97.7024 117.707 91.6882L116.075 91.3445C114.786 91.0868 113.411 90.829 112.209 90.5713C109.803 90.1417 106.452 87.9078 103.789 84.8148C102.5 83.2682 100.524 80.6048 99.4068 77.254C98.9772 76.0512 98.7195 74.6765 98.6336 73.3018C98.6336 72.7863 98.6336 72.1849 98.7195 71.6694C98.9773 68.5763 100.352 65.8269 102.758 63.3353C106.023 60.1564 111.178 57.6648 118.051 55.9464C118.395 55.8605 118.652 55.5168 118.652 55.0872C118.051 50.5336 117.278 39.4502 124.065 33.6078C128.963 29.3978 136.695 28.8823 147.091 32.0613C147.091 32.0613 147.091 32.0613 147.177 32.0613C148.38 29.9993 152.934 22.954 160.237 21.4075C164.704 20.4624 169.43 21.6653 174.241 25.016C175.874 26.133 176.561 26.133 176.905 25.9611C178.881 24.5865 182.489 23.8132 186.27 23.985C190.651 24.2428 194.861 25.6175 198.126 27.9372C198.384 28.1091 198.556 28.2809 198.814 28.4528C201.563 30.6007 203.539 33.3501 204.656 36.7868C204.828 37.3023 205 37.7319 205.086 38.2474C206.374 43.2306 206.031 49.3308 203.969 56.2901C203.797 56.8056 203.883 57.3211 204.055 57.7507C204.828 59.555 206.117 63.3353 206.632 67.4594C206.976 72.7863 206.117 77.0822 203.711 80.0893Z" fill="#3E3D46"/>
          <path d="M125.354 73.7313L131.798 58.9535L121.316 58.3521L125.354 73.7313Z" fill="#3E3D46"/>
          <path d="M169.516 73.5596L145.459 81.5499L153.363 89.5403L169.516 73.5596Z" fill="#3E3D46"/>
          <path d="M161.268 47.0972L134.375 58.5242L143.912 79.1445L161.268 47.0972Z" fill="#3E3D46"/>
          <path d="M163.158 47.4404L145.717 79.5736L171.836 70.896L163.158 47.4404Z" fill="#3E3D46"/>
          <path d="M161.955 44.8629L152.074 28.3667C150.27 30.2569 149.067 32.233 148.552 33.0922C148.294 33.6077 147.778 33.9513 147.177 34.0373L135.234 56.204L161.955 44.8629Z" fill="#3E3D46"/>
          <path d="M145.287 33.6081C139.96 32.0615 135.492 31.632 131.798 32.1475L133.774 54.9157L145.287 33.6081Z" fill="#3E3D46"/>
          <path d="M172.866 45.8939H172.78V45.4644L164.532 46.0658L172.265 66.7719L172.866 45.8939Z" fill="#3E3D46"/>
          <path d="M202.766 52.8532C204.742 44.2614 203.625 38.419 201.305 34.4668L176.561 44.3473L202.766 52.8532Z" fill="#3E3D46"/>
          <path d="M133.173 60.3281L126.471 75.9652L142.194 79.8314L133.173 60.3281Z" fill="#3E3D46"/>
          <path d="M201.821 56.5479L191.768 65.0537L204.055 64.9678C203.453 62.1325 202.594 59.8127 202.079 58.524C201.821 57.9225 201.735 57.2352 201.821 56.5479Z" fill="#3E3D46"/>
          <path d="M196.752 29.4836C193.83 27.3357 189.964 26.1328 185.926 25.8751C182.575 25.7032 179.31 26.3047 177.678 27.5075C177.334 27.7653 176.905 27.9371 176.475 27.9371L174.843 43.0586L200.188 32.9203C199.243 31.5456 197.954 30.4287 196.752 29.4836Z" fill="#3E3D46"/>
          <path d="M173.983 70.1227L187.816 65.569L174.671 47.2686L173.983 70.1227Z" fill="#3E3D46"/>
          <path d="M163.415 43.0587L163.845 44.2615L172.866 43.6601L172.952 41.7699L173.124 42.0277L174.671 27.6794C173.897 27.3357 173.296 26.9062 172.866 26.6484C168.485 23.5554 164.275 22.4384 160.322 23.3835C157.573 23.985 155.253 25.4456 153.363 27.1639L163.244 43.4883L163.415 43.0587Z" fill="#3E3D46"/>
          <path d="M151.817 90.5714L143.998 82.667L143.74 83.1825L143.654 83.0107L130.509 102.686L151.817 90.5714Z" fill="#3E3D46"/>
          <path d="M157.831 103.115C162.213 102.514 165.907 101.655 169.086 100.452L154.824 92.6333L157.831 103.115Z" fill="#3E3D46"/>
          <path d="M155.855 91.1725L171.148 99.5924C174.069 98.2178 176.217 96.4994 177.764 94.4374C180.427 90.9147 180.255 87.2203 179.912 85.416L155.855 91.1725Z" fill="#3E3D46"/>
          <path d="M188.246 82.5809L188.332 67.2876L174.843 71.7553L188.246 82.5809Z" fill="#3E3D46"/>
          <path d="M156.284 89.1105L180.943 83.1821C181.372 82.9244 181.802 82.8385 182.231 82.9244C183.692 83.1821 185.067 83.2681 186.355 83.4399L173.038 72.6143L156.284 89.1105Z" fill="#3E3D46"/>
          <path d="M176.217 46.2378L189.449 64.7101L201.563 54.4L176.217 46.2378Z" fill="#3E3D46"/>
          <path d="M190.222 66.9438L190.05 83.6118C195.807 83.5259 199.931 81.9794 202.25 78.9723C204.914 75.6215 205 70.9819 204.398 66.772L190.222 66.9438Z" fill="#3E3D46"/>
          <path d="M144.256 107.411C145.287 109.043 145.631 110.847 145.287 112.738C144.685 116.174 141.764 119.182 139.444 121.158C145.201 119.955 149.669 117.034 152.762 112.308C155.167 108.614 155.941 105.091 156.112 104.232L152.934 93.1484L144.256 107.411Z" fill="#3E3D46"/>
          <path d="M120.027 56.4618L132.141 57.0632L129.993 32.5767C128.103 33.0922 126.471 33.9513 125.096 35.1542C118.91 40.3952 119.683 50.7912 120.285 55.0012C120.285 55.5167 120.199 56.0322 120.027 56.4618Z" fill="#3E3D46"/>
          <path d="M119.168 57.4927C118.91 57.6645 118.652 57.8363 118.309 57.9223C106.194 60.9294 100.008 66.2563 100.266 73.3015C100.266 74.1607 100.438 75.1058 100.61 75.8791V75.0199L123.979 75.6213L119.168 57.4927Z" fill="#3E3D46"/>
          <path d="M119.168 90.3135H119.34V91.0868C119.254 96.8432 120.886 101.139 124.237 103.803C124.924 104.404 125.784 104.92 126.557 105.263L124.581 79.8315L119.168 90.3135Z" fill="#3E3D46"/>
          <path d="M100.867 76.8242C101.813 79.8313 103.617 82.237 104.906 83.6976C107.311 86.447 110.232 88.509 112.294 88.8527C113.583 89.1105 114.958 89.2823 116.333 89.626L117.45 89.8837L123.807 77.4256L100.867 76.8242Z" fill="#3E3D46"/>
          <path d="M126.213 77.7695L128.189 102.857L142.366 81.7217L126.213 77.7695Z" fill="#3E3D46"/>
          <path d="M128.275 106.036C134.118 108.098 140.991 106.981 142.623 106.638L150.7 93.3203L128.275 106.036Z" fill="#3E3D46"/>
          <path d="M203.797 57.8367C203.625 57.3212 203.539 56.8057 203.711 56.3761C205.773 49.4168 206.117 43.3166 204.828 38.3334C204.656 37.8179 204.57 37.3883 204.398 36.8728C203.281 33.522 201.305 30.6867 198.556 28.5388C198.298 28.3669 198.126 28.1951 197.868 28.0233C194.604 25.7035 190.394 24.3288 186.012 24.0711C182.231 23.8992 178.623 24.5866 176.647 26.0472C176.303 26.3049 175.616 26.3049 173.983 25.1021C169.172 21.7513 164.446 20.5484 159.979 21.4935C152.676 23.126 148.122 30.0853 146.919 32.1473C146.919 32.1473 146.919 32.1473 146.833 32.1473C136.437 28.9684 128.705 29.4839 123.807 33.6938C116.934 39.5362 117.707 50.7055 118.395 55.1733C118.48 55.6028 118.223 55.9465 117.793 56.0324C110.834 57.7508 105.679 60.2424 102.5 63.4214C100.008 65.8271 98.6335 68.6623 98.4616 71.7554C98.3757 72.2709 98.3757 72.7864 98.3757 73.3878C98.4617 74.7625 98.7194 76.0513 99.149 77.34C100.18 80.6908 102.242 83.3543 103.531 84.9008C106.194 87.9938 109.545 90.3136 111.951 90.6573C113.239 90.915 114.528 91.0869 115.817 91.4305L117.449 91.7742C117.449 97.7884 119.34 102.256 123.034 105.263C126.213 107.755 130.681 109.13 136.094 109.13C139.101 109.13 141.592 108.7 142.709 108.528C143.483 109.731 143.74 111.02 143.483 112.394C142.537 117.292 135.664 121.759 135.578 121.759L132.399 123.736L136.094 123.478C138.413 123.306 140.647 122.876 142.623 122.189C144.428 121.588 146.06 120.814 147.607 119.869C150.27 118.237 152.504 116.003 154.222 113.34C156.542 109.817 157.487 106.466 157.745 105.006C161.611 104.49 164.962 103.803 167.883 102.772C172.952 101.053 176.733 98.6476 179.052 95.5546C182.145 91.4305 181.974 87.2206 181.544 85.0726V84.9867L181.888 84.9008C188.16 85.8459 193.315 85.674 197.181 84.3853C199.845 83.5261 201.907 82.0655 203.453 80.1753C205.859 77.1682 206.718 72.9582 206.117 67.6313C205.859 63.4214 204.57 59.7269 203.797 57.8367ZM204.055 64.9679L191.768 65.0538L201.821 56.5479C201.735 57.2353 201.821 57.8367 202.078 58.5241C202.594 59.7269 203.453 62.1326 204.055 64.9679ZM201.305 34.553C203.539 38.5052 204.742 44.3476 202.766 52.9394L176.561 44.5195L201.305 34.553ZM176.475 27.9373C176.905 27.9373 177.248 27.7655 177.678 27.5078C179.31 26.3908 182.489 25.7035 185.926 25.8753C189.964 26.0472 193.83 27.3359 196.751 29.4839C197.954 30.343 199.243 31.46 200.274 32.9206L174.928 43.0589L176.475 27.9373ZM160.408 23.2978C164.361 22.4386 168.656 23.5555 172.952 26.5627C173.296 26.8204 173.983 27.25 174.757 27.5937L173.21 41.9419L173.038 41.6842L172.952 43.5744L163.931 44.1758L163.501 42.9729L163.33 43.3166L153.449 26.9923C155.253 25.3598 157.573 23.8992 160.408 23.2978ZM187.816 65.5693L173.983 70.2089L174.671 47.2688L187.816 65.5693ZM133.172 60.3283L142.194 79.8316L126.471 75.9653L133.172 60.3283ZM125.354 73.7315L121.23 58.3522L131.712 58.8677L125.354 73.7315ZM134.375 58.5241L161.267 47.097L143.912 79.0584L134.375 58.5241ZM143.74 83.1824L143.998 82.6669L151.817 90.5714L130.509 102.6L143.654 82.9247L143.74 83.1824ZM145.459 81.55L169.516 73.5596L153.277 89.5403L145.459 81.55ZM145.716 79.5739L163.158 47.5266L171.835 70.8962L145.716 79.5739ZM164.532 46.066L172.78 45.4646L172.695 45.8942L172.78 45.8082L172.093 66.6862L164.532 46.066ZM147.091 34.0375C147.692 33.9516 148.122 33.6079 148.466 33.0924C148.981 32.1473 150.184 30.2571 151.988 28.3669L161.869 44.8631L135.063 56.2043L147.091 34.0375ZM145.287 33.6079L133.774 54.9155L131.798 32.1473C135.406 31.6318 139.96 32.1473 145.287 33.6079ZM125.01 35.1544C126.385 33.9516 128.017 33.0924 129.908 32.5769L132.055 57.0635L119.941 56.462C120.113 56.0324 120.199 55.5169 120.199 55.0014C119.597 50.7915 118.91 40.3954 125.01 35.1544ZM100.61 75.8794C100.438 75.0203 100.266 74.1611 100.266 73.3019C100.008 66.2566 106.194 60.9297 118.309 57.9226C118.652 57.8367 118.91 57.6649 119.168 57.493L123.979 75.6217L100.61 75.0203V75.8794ZM117.278 89.884L116.161 89.6263C114.786 89.3685 113.497 89.1108 112.123 88.853C110.146 88.5093 107.139 86.4473 104.734 83.6979C103.531 82.3233 101.727 79.8316 100.696 76.8245L123.55 77.4259L117.278 89.884ZM124.151 103.803C120.8 101.139 119.168 96.8433 119.254 91.0869V90.3136H119.082L124.409 79.8316L126.385 105.263C125.698 104.92 124.924 104.404 124.151 103.803ZM126.213 77.7696L142.366 81.7218L128.189 102.858L126.213 77.7696ZM142.623 106.638C140.991 106.982 134.117 108.184 128.275 106.037L150.7 93.3207L142.623 106.638ZM152.848 112.223C149.755 116.948 145.287 119.869 139.53 121.072C141.85 119.096 144.685 116.089 145.373 112.652C145.716 110.762 145.373 108.958 144.342 107.325L153.105 92.977L156.284 104.06C156.027 105.006 155.339 108.528 152.848 112.223ZM157.831 103.115L154.824 92.7193L169.086 100.538C165.907 101.655 162.213 102.514 157.831 103.115ZM177.764 94.4377C176.217 96.4997 173.983 98.218 171.148 99.5927L155.855 91.1728L179.998 85.3304C180.255 87.2206 180.427 90.915 177.764 94.4377ZM182.231 83.0106C181.802 82.9247 181.286 83.0106 180.943 83.2684L156.284 89.1967L173.038 72.7005L186.441 83.4402C185.067 83.3543 183.692 83.1824 182.231 83.0106ZM188.246 82.581L174.928 71.7554L188.417 67.2877L188.246 82.581ZM189.448 64.7101L176.217 46.2378L201.563 54.4L189.448 64.7101ZM202.25 78.9725C199.845 81.9796 195.806 83.5261 190.05 83.612L190.222 66.944L204.398 66.7721C205.086 70.8962 204.914 75.6217 202.25 78.9725Z" fill="white"/>
          <path d="M10.396 298.234V331.055H0V275.38H13.3172L37.9756 318.597C37.4601 314.559 37.2883 310.95 37.2883 307.685V275.294H47.6843V330.969H33.9375L9.7087 288.096C9.96645 290.158 10.1383 292.048 10.2242 293.767C10.3101 295.485 10.396 297.032 10.396 298.234Z" fill="#3E3D46"/>
          <path d="M81.6219 331.914C76.5527 331.914 72.1709 331.055 68.6483 329.422C65.1257 327.79 62.4622 325.298 60.6579 322.033C58.8537 318.768 57.9086 314.902 57.9086 310.262V275.466H69.5934V309.317C69.5934 313.699 70.6244 317.05 72.7723 319.37C74.8344 321.69 77.9274 322.806 81.9655 322.806C86.0896 322.806 89.3544 321.604 91.5883 319.198C93.8222 316.792 94.9391 313.356 94.9391 308.974V275.466H106.538V309.661C106.538 314.387 105.593 318.339 103.617 321.69C101.641 325.04 98.8054 327.532 95.1109 329.336C91.4165 331.055 86.8628 331.914 81.6219 331.914Z" fill="#3E3D46"/>
          <path d="M130.079 316.878L125.096 331.14H113.411L133.688 275.466H147.435L167.711 331.14H156.198L151.215 316.878H130.079ZM140.733 283.972C140.475 285.003 140.132 286.291 139.616 287.752C139.101 289.213 138.757 290.244 138.585 290.845L132.743 308.029H148.724L142.709 290.501C142.366 289.384 142.022 288.353 141.678 287.237C141.335 286.12 141.077 285.089 140.733 283.972Z" fill="#3E3D46"/>
          <path d="M185.754 298.234V331.055H175.358V275.38H188.675L213.334 318.597C212.818 314.559 212.646 310.95 212.646 307.685V275.294H223.042V330.969H209.381L185.153 288.096C185.41 290.158 185.582 292.048 185.668 293.767C185.668 295.485 185.754 297.032 185.754 298.234Z" fill="#3E3D46"/>
          <path d="M259.815 322.721C266.86 322.721 271.758 319.198 274.507 312.153L284.645 316.019C282.497 321.432 279.232 325.384 275.022 328.048C270.813 330.711 265.743 332 259.815 332C253.887 332 248.818 330.883 244.608 328.563C240.398 326.244 237.219 322.979 234.985 318.683C232.751 314.387 231.72 309.146 231.72 303.132C231.72 297.031 232.751 291.876 234.899 287.666C237.047 283.456 240.14 280.278 244.264 278.044C248.388 275.81 253.371 274.779 259.385 274.779C265.915 274.779 271.242 276.068 275.366 278.731C279.49 281.394 282.325 285.175 284.044 290.33L273.734 293.165C272.875 290.33 271.156 288.182 268.579 286.464C266.001 284.831 263.08 283.972 259.557 283.972C254.316 283.972 250.278 285.604 247.529 288.869C244.779 292.134 243.405 296.946 243.405 303.218C243.405 307.513 244.006 311.122 245.295 314.043C246.584 316.964 248.388 319.198 250.794 320.745C253.285 321.948 256.292 322.721 259.815 322.721Z" fill="#3E3D46"/>
          <path d="M337.657 322.119V331.14H292.206V275.466H336.024V284.401H303.891V298.406H333.618V307.427H303.891V322.119H337.657V322.119Z" fill="#3E3D46"/>
          </svg>
</Logo>
    <ButtonContainer>
      <ButtonUI text='GET STARTED' routeTo='/survey'></ButtonUI>
      <ButtonUI text='HOW IT WORKS' bgcolor='none' color='#3E3D46'></ButtonUI>
    </ButtonContainer>
  </Container>
}
