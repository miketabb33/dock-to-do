import React from 'react'

type IconName = 'plus' | 'trash' | 'check' | 'edit'

type IconProps = {
  iconName: IconName
  className?: string
}

const Icon = ({ iconName, className }: IconProps) => {
  const iconsPath = iconMap.get(iconName) || 'icon-check'
  return (
    <svg className={className}>
      <use xlinkHref={`sprite.svg#${iconsPath}`} />
    </svg>
  )
}

const iconMap = new Map<IconName, string>([
  ['plus', 'icon-circle-with-plus'],
  ['check', 'icon-check'],
  ['edit', 'icon-edit'],
  ['trash', 'icon-trash'],
])

export default Icon
