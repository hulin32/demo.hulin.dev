import { renderHook, act } from '@testing-library/react';
import { useOnlineStatus } from './useOnlineState';
import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { vi } from 'vitest';

describe('useOnlineStatus', () => {
  let onlineSpy: vi.SpyInstance;

  beforeEach(() => {
    onlineSpy = vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    window.addEventListener('online', () => {});
    window.addEventListener('offline', () => {});
  });

  afterEach(() => {
    onlineSpy.mockRestore();
    window.removeEventListener('online', () => {});
    window.removeEventListener('offline', () => {});
    vi.restoreAllMocks();
  });

  it('should return true when online', () => {
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);
  });

  it('should return false when offline', () => {
    onlineSpy.mockReturnValue(false);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(false);
  });

  it('should update status when online status changes', () => {
    const { result } = renderHook(() => useOnlineStatus());

    act(() => {
      window.dispatchEvent(new Event('offline'));
    });
    expect(result.current).toBe(false);

    act(() => {
      window.dispatchEvent(new Event('online'));
    });
    expect(result.current).toBe(true);
  });
});
