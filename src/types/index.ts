export interface CityData {
  id: string;
  name: string;
  coordinates: {
    x: number;
    y: number;
  };
  indexName: string;
  indexValue: number;
  change: number;
  changePercent: number;
  headlines: string[];
}

export interface MarkerProps {
  city: CityData;
  isActive: boolean;
  onClick: () => void;
}
