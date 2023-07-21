import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';



function VideoHeader() {
  const [isOnline, setIsOnline] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById('videoElement');
    videoElement.muted = true; // Mute the video to prevent audio playback
    videoElement.play();

    fetch('https://api.mcsrvstat.us/2/upt.curiousers.org')
    .then((response) => response.json())
    .then((data) => {
      // Check if the server is online
      if (data.online) {
        setIsOnline(true);
        setOnlinePlayers(data.players.online);
      }
    })
    .catch((error) => {
      console.error('Error fetching server status:', error);
    });

}, []);

  return (
    <section style={{ position: 'relative' }}>
      {/* Grey overlay */}
      <div style={{ position: 'relative' }}>
        <video id="videoElement" autoPlay loop style={{ width: '100%', objectFit: 'cover' }}>
          <source src="/vid/potato.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Grey overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Grey overlay color
          }}
        />
        <div
          className={styles.heroInner}
          style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}
        >
          <center>
            <Heading as="b" className={styles.heroDemoVidTagline}>
              <span
                className={styles.heroTitleTextHtml}
                dangerouslySetInnerHTML={{
                  __html: '《Potato》 跨平台游玩',
                }}
              />
            </Heading>
            <p>Potato 当前周目支持通过多种平台进行游玩。</p>
            <p>只要通过任何支持的平台或客户端，就可加入游戏。</p>
            <div className={styles.indexCtas}>
              {isOnline && (
                <>
                  <h2>🟢当前在线：{`${onlinePlayers}`} 玩家</h2>
                </>
              )}
            <h2><code>upt.curiousers.org</code></h2>
            </div>
            <div className={styles.indexCtas}>
              <Link className="button button--primary" to="/docs/starting/javaclient">
              Java 版 游玩
              </Link>
              <Link className="button button--secondary" to="/docs/starting/beclient">
              基岩版跨平台
              </Link>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
  
}

export default function Donate(): JSX.Element {
    return (
      <Layout title='游玩'>
          <VideoHeader />
      </Layout>
    );
  }