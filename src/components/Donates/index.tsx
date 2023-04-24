/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';

import clsx from 'clsx';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface Props {
  name: string;
  via: string;
  amount: string;
  notes: ReactNode;
  date: string;
  githubUsername: string;
}

export default function Donates({
  name,
  via,
  amount,
  notes,
  date,
  githubUsername,
}: Props): JSX.Element {
  return (
    <div className={clsx('card', styles.donation)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={name}
            className="avatar__photo"
            src={`https://github.com/${githubUsername}.png`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx('avatar__intro', styles.donationMeta)}>
            <strong className="avatar__name">{name}</strong>
            <span>通过 {via}</span>
          </div>
        </div>
      </div>

      <div className={clsx('card__body', styles.donation)}>
        <Link className={clsx(styles.donationMeta, styles.donationAmount)} to=''>
          {amount}
        </Link>
      </div>

      <div className={clsx('card__body', styles.donationMeta)}>{notes}</div>

      <div className="card__footer">{date}</div>
    </div>
  );
}
