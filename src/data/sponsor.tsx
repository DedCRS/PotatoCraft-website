/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Donor} from '../components/Donates';

export type DonorItem = Donor & {
  showed: boolean;
};

const Card: DonorItem[] = [
  {
    name: 'yukonisen#QwQ',
    via: '直接续费',
    amount: 'US$1##.##',
    date: '2024/06/11',
    notes: (
      <>
        备注：服务器续费
      </>
    ),
    showed: true,
    githubUsername: 'yukonisen',
  },
  {
    name: 'yukonisen#QwQ',
    via: '直接续费',
    amount: 'CN¥8##.##',
    date: '2024/06/10',
    notes: (
      <>
        备注：服务器续费
      </>
    ),
    showed: true,
    githubUsername: 'yukonisen',
  },
  {
    name: 'yukonisen#QwQ',
    via: '直接续费',
    amount: 'US$2##.##',
    date: '2024/03/17',
    notes: (
      <>
        备注：服务器续费
      </>
    ),
    showed: true,
    githubUsername: 'yukonisen',
  },
  {
    name: 'yukonisen#QwQ',
    via: '捐助',
    amount: 'US$1#.##',
    date: '2023/03/26',
    notes: (
      <>
        备注：用于域名续费
      </>
    ),
    showed: true,
    githubUsername: 'yukonisen',
  },
  {
    name: 'KSSiner',
    via: '捐助',
    amount: 'CN¥1##.##',
    date: '2023/02/17',
    notes: (
      <>
        备注：用于服务器续费
      </>
    ),
    showed: true,
    githubUsername: 'kssiner',
  },
];

export default Card;
