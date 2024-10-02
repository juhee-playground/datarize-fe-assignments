import { ResponsiveBar } from '@nivo/bar';

import Loading from '@/components/common/Loading';

interface IBarChartsProps {
  data: IPurchaseData[];
  loading: boolean;
}

const BarChart = ({ data, loading }: IBarChartsProps) => {
  if (!data || data.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={['count']}
        indexBy='range'
        margin={{ top: 10, right: 50, bottom: 50, left: 120 }}
        padding={0.3}
        layout='horizontal' // 수평 바 차트로 설정
        colors={{ scheme: 'category10' }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '판매 갯수',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '가격 범위',
          legendPosition: 'middle',
          legendOffset: -100,
        }}
        axisTop={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor='#ffffff'
        legends={[]}
      />
    </div>
  );
};

export default BarChart;
