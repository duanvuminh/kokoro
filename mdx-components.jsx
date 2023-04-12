import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components) {
  return {Link, Image,...components };
}