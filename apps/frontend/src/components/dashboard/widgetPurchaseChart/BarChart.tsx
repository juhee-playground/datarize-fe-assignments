import { ResponsiveBar } from '@nivo/bar';

import Loading from '@/components/common/Loading';
import { colors } from '@/styles/colors';
import { addCommasToNumber } from '@/utils/number';

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
        layout='horizontal'
        colors={colors.primary}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: value => {
            if (typeof value === 'string') {
              const [start, end] = value.split(' - ');
              const formattedStart = addCommasToNumber(Number(start));
              const formattedEnd = addCommasToNumber(Number(end));
              return `₩${formattedStart} - ₩${formattedEnd}`;
            }
            return value;
          },
        }}
        axisTop={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={colors.text.basic}
        legends={[]}
      />
    </div>
  );
};

export default BarChart;
