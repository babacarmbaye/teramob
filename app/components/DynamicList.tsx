import DSCard from '@/app/components/DSCard';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

const DATA_BATCH_SIZE = 20;

export default function DynamicList() {
  const [data, setData] = useState<{ title: string; subtitle?: string }[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    // simulate API delay
    await new Promise((res) => setTimeout(res, 800));

    const newItems = Array.from({ length: DATA_BATCH_SIZE }, (_, i) => ({
      title: `Item ${page * DATA_BATCH_SIZE + i + 1}`,
      subtitle: `Subtitle ${page * DATA_BATCH_SIZE + i + 1}`,
    }));

    setData((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);

    if ((page + 1) * DATA_BATCH_SIZE >= 100) setHasMore(false);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <DSCard />}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator style={{ margin: 16 }} /> : null}
      />
    </>
  );
}
