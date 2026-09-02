import { useState, useEffect } from 'react';
import { BattleProfession } from '../types';

/**
 * Service to load profession datasets with caching, graceful fallbacks and offline-first reliability.
 */
class ProfessionDataService {
  private static cachedData: BattleProfession[] | null = null;

  /**
   * Fetches professions from /data/professions.json or returns fallback data.
   */
  static async loadProfessions(fallbackData: BattleProfession[]): Promise<BattleProfession[]> {
    if (this.cachedData && this.cachedData.length > 0) {
      return this.cachedData;
    }

    try {
      const response = await fetch('/data/professions.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        this.cachedData = data;
        return data;
      }
    } catch (err) {
      console.warn('Could not load external professions.json, using built-in high quality dataset', err);
    }

    this.cachedData = fallbackData;
    return fallbackData;
  }
}

export function useProfessionsData(defaultProfessions: BattleProfession[]) {
  const [professions, setProfessions] = useState<BattleProfession[]>(defaultProfessions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await ProfessionDataService.loadProfessions(defaultProfessions);
        if (isMounted) {
          setProfessions(data);
        }
      } catch (e: any) {
        if (isMounted) {
          setError(e.message || 'Ошибка загрузки данных');
          setProfessions(defaultProfessions);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [defaultProfessions]);

  return { professions, isLoading, error };
}
