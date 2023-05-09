import React, { FC } from 'react'
import { Card, CardMedia, Avatar } from '@mui/material'

import useStyles from './style'

interface HeroProps {
  image?: string | null | undefined
  avatar?: string | null | undefined
  url?: string | null | undefined
}

const Hero: FC<HeroProps> = ({ image, avatar, url }) => {
  if (!image && !avatar && !url) return null
  const classes = useStyles()
  return (
    <div className={classes.hero}>
      <Card>
        {image ? (
          <CardMedia
            className={classes.image}
            component="img"
            height="250"
            image={image}
            alt="Image store"
          />
        ) : (
          <CardMedia className={classes.image} component="img" height="80" alt="Image store" />
        )}
      </Card>
      {avatar && (
        <div className={classes.avatar}>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <Avatar alt="Lovvet Olo avatar" src={avatar} sx={{ width: 70, height: 70 }} />
            </a>
          ) : (
            <Avatar alt="Lovvet Olo avatar" src={avatar} sx={{ width: 70, height: 70 }} />
          )}
        </div>
      )}
    </div>
  )
}
Hero.defaultProps = {
  image: null,
  avatar: null,
  url: null,
}

export default Hero