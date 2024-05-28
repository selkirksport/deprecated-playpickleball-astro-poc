import React, { useState, useCallback } from 'react';
import { filterStore } from '../../stores/filterStore';
import styles from './FilterInput.module.scss';

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let debounceTimer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
};

const FilterInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      debounce((value: string) => filterStore.set(value), 300)(e.target.value);
    },
    []
  );

  return (
    <input
      type="text"
      className={styles.searchInput}
      value={value}
      onChange={handleChange}
      placeholder="Search articles..."
    />
  );
};

export default FilterInput;
