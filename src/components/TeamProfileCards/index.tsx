/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function WebsiteLink({to, children}: {to: string; children?: ReactNode}) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

type IMProps = {
  className?: string;
  name: string;
  children: ReactNode;
  inviteUrl?: string;
  websiteUrl?: string;
  iconUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                <br />
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

function IMProfileCard({
  className,
  name,
  children,
  inviteUrl,
  websiteUrl,
  iconUrl,
}: IMProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${iconUrl}`}
              style={{ objectFit: 'contain'}}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                <br />
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {inviteUrl && (
              <Link className="button button--secondary" href={inviteUrl}>
                🔗邀请链接
              </Link>
            )}
            {websiteUrl && (
              <Link className="button button--secondary" href={websiteUrl}>
                🖥️下载客户端
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function IMProfileCardCol(props: IMProps) {
  return (
    <IMProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function AdministrationRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="NightFish"
        githubUrl="https://github.com/dmzz-yyhyy">
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="[CSUB] yukonisen#QwQ"
        githubUrl="https://github.com/yukonisen">
      </TeamProfileCardCol>
    </div>
  );
}

export function IMRow(): JSX.Element {
  return (
    <div className="row">
      <IMProfileCardCol
        name="TeamSpeak 3"
        inviteUrl='ts3server://ts.curiousers.org?password=staro'
        iconUrl= "https://teamspeak.com/user/themes/teamspeak/images/logo_inverse.svg"
        websiteUrl="https://teamspeak.com/en/downloads/#client">
          使用 TeamSpeak 3 客户端加入我们的服务器并开始语音聊天。<br />服务器地址：<br /><code>ts.curiousers.org</code>
          ，密码<code>staro</code>。<br /><br />🇨🇳 如果有需要，可以<a href="https://github.com/jitingcn/TS3-Translation_zh-CN/releases" target="_blank">在这里</a>下载简体中文语言包。🇨🇳
      </IMProfileCardCol>
      <IMProfileCardCol
        name="QQ 群聊"
        inviteUrl="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1PBni0QwNyJrnEYpAdC_JGlECQabB4ui&authKey=xACcrSZkS3%2FqQFbHpjV1mvFEpRWkoIO0VsFr6jOy7io2pC8UHPJUVfHpJO1LcfdF&noverify=0&group_code=605822090"
        iconUrl="https://wiki.connect.qq.com/wp-content/uploads/2013/10/03_qq_symbol-1-250x300.png"
        websiteUrl="https://im.qq.com/">
          加入我们的QQ群聊开始讨论。<br/>由于<a href="/blog/qq-group-explanation">历史遗留原因</a>，这个群聊<b>并非</b>CSUB所拥有，但仍然是我们讨论的主要渠道之一。
      </IMProfileCardCol>
      <IMProfileCardCol
        name="KOOK 语音"
        inviteUrl="https://www.kookapp.cn/app/invite/Izy7mk"
        iconUrl="https://www.kookapp.cn/favicon.ico"
        websiteUrl="https://www.kookapp.cn/">
          加入 KOOK 的语音聊天。
      </IMProfileCardCol>
      <IMProfileCardCol
        name="其他平台？"
        iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/300px-Icon-round-Question_mark.svg.png">
          还有什么合适的平台吗？在社区内或<a href='mailto:yukonisen@curiousers.org'>发送 Email</a> 推荐给我们！
      </IMProfileCardCol>
    </div>
  );
}