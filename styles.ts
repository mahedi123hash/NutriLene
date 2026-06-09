import { CSSProperties } from 'react'

export const inputStyle: CSSProperties = {
  width: '100%',
  background: '#111827',
  border: '1px solid #1E2A3D',
  borderRadius: 8,
  padding: '9px 12px',
  color: '#F1F5F9',
  fontSize: 14,
  outline: 'none',
  fontFamily: 'inherit',
}

export const btnPrimary: CSSProperties = {
  padding: '9px 18px',
  borderRadius: 8,
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  background: '#6366F1',
  color: '#fff',
}

export const btnSecondary: CSSProperties = {
  padding: '9px 18px',
  borderRadius: 8,
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  background: '#111827',
  color: '#F1F5F9',
  border: '1px solid #1E2A3D',
}

export const resultBox: CSSProperties = {
  background: '#111827',
  border: '1px solid #1E2A3D',
  borderRadius: 8,
  padding: 16,
  marginTop: 14,
}

export const statCard = (color: string): CSSProperties => ({
  background: '#111827',
  borderRadius: 8,
  padding: 10,
  textAlign: 'center',
  border: `1px solid ${color}33`,
})

export const monoStyle: CSSProperties = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 12,
}
