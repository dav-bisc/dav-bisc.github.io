import React from 'react';

const InstagramEmbed = () => {
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/CttYrVDLRUN/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow:
            '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '99.375%',
          width: '-webkit-calc(100% - 2px)',
          width: 'calc(100% - 2px)',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href="https://www.instagram.com/p/CttYrVDLRUN/?utm_source=ig_embed&utm_campaign=loading"
            style={{
              background: '#FFFFFF',
              lineHeight: 0,
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: 0,
                  height: '40px',
                  marginRight: '14px',
                  width: '40px',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    width: '60px',
                  }}
                ></div>
              </div>
            </div>
            <div style={{ padding: '19% 0' }}></div>
            <div
              style={{
                display: 'block',
                height: '50px',
                margin: '0 auto 12px',
                width: '50px',
              }}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 60 60"
                version="1.1"
                xmlns="https://www.w3.org/2000/svg"
                xmlnsXlink="https://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                    <g>
                      <path
                        d="M556.869,30.41 C554.814,30.41 553.148,30.677 552.82 30.677 551.694 C 30.677 550.567 31.903 549.341 33.03 549.341 C 34.157 549.341 35.384 550.567 35.384 551.694 C 35.384 552.82 34.157 554.046 33.03 554.046 C 31.903 554.046 30.677 552.82 30.677 551.694 L 30.677 551.694 Z"
                        ></path>
                        <path
                          d="M552.095,31.668 C 549.903,31.668 548.209,33.378 548.209 35.564 C 548.209 37.75 549.903 39.461 552.095 39.461 C 554.287 39.461 555.981 37.75 555.981 35.564 C 555.981 33.378 554.287 31.668 552.095 31.668 L 552.095 31.668 Z"
                        ></path>
                        <path
                          d="M568.5,38.965 C 565.494,38.965 562.985,36.455 562.985 33.449 C 562.985 30.442 565.494 27.932 568.5 27.932 C 571.507 27.932 574.017 30.442 574.017 33.449 C 574.017 36.455 571.507 38.965 568.5 38.965 L 568.5 38.965 Z"
                        ></path>
                      </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
              <p
                style={{
                  color: '#000',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  lineHeight: '17px',
                  marginBottom: '0',
                  marginTop: '8px',
                  textAlign: 'center',
                }}
              >
                <a
                  href="https://www.instagram.com/p/CttYrVDLRUN/?utm_source=ig_embed&utm_campaign=loading"
                  style={{ color: '#000', textDecoration: 'none' }}
                  target="_blank"
                >
                  View this post on Instagram
                <br/>
                  Guarda questo post su instagram
                </a>
              </p>
            </div>
          </blockquote>
          <script async src="https://platform.instagram.com/en_US/embeds.js"></script>
        </div>
      );
    };
  
  export default InstagramEmbed;
  
