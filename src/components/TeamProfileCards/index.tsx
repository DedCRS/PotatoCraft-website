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
          服务器地址：<br /><code>ts.curiousers.org</code>
          ，密码<code>staro</code>。<br /><br />🇨🇳 <a href="https://github.com/jitingcn/TS3-Translation_zh-CN/releases" target="_blank">在这里</a>下载简体中文语言包。🇨🇳
      </IMProfileCardCol>
      <IMProfileCardCol
        name="黑盒语音"
        inviteUrl="https://chat.xiaoheihe.cn/ipr36u"
        iconUrl="https://imgheybox.max-c.com/oa/2023/03/21/47912df9f48f030c784dd6115b91274b.png?imageMogr2/format/webp/quality/75"
        websiteUrl="https://chat.xiaoheihe.cn/">
          加入 黑盒语音 服务器。<br />
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
          还有什么合适的平台吗？在社区推荐给我们！
      </IMProfileCardCol>
    </div>
  );
}