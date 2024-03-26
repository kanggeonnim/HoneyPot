'use client';

import React, { useRef, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab1({ params }: T.AssemblyTab1Props) {
  const target = useRef<HTMLHeadingElement>(null);
  const [pageParam, setPageParam] = useState(0);
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  const { data: pledgeResponse, isFetched: pledgeFetched } = useQuery({
    queryKey: [{ assembly: `pledge-list-request-${params.id}`, page: pageParam }],
    queryFn: () =>
      API.getPledgeList({ assemblyId: params.id, page: pageParam, take: 10 }).then(res => {
        if (res.status === 204) return { totalCount: 0, pledgeDetailResponse: [] };
        return res.data;
      }),
    retry: false,
  });

  const handlePaginationClick = (newPage: number) => {
    setPageParam(newPage);
    if (target.current) target.current.scrollIntoView({ behavior: 'smooth' });
  };

  // if (pledgeResponse) console.log(`공약 리스트 조회 :`, pledgeResponse);
  return (
    <section className={S.wrapper}>
      <h2 className={S.titleWrapper} ref={target}>
        <span className={S.title}>공약</span>
        <span className={S.totalContWrapper}>
          총 <span className={S.number}>{pledgeResponse?.totalCount}</span>개
        </span>
      </h2>
      <ul className={S.pledgeWrapper}>
        {pledgeResponse?.pledgeDetailResponse.map((el: T.PledgeProps, i: number) => (
          <Comp.Pledge key={`pledge-${el.id}`} {...el} polyName={infoResponse.data.polyName} />
        ))}
      </ul>
      <Comp.Pagination
        currentPage={pageParam}
        totalItems={pledgeResponse?.totalCount}
        onPageChange={handlePaginationClick}
      />
    </section>
  );
}
