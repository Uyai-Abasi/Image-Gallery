  import React,{useState  } from 'react'
  import ImageGallery from '@/layout/gallery'
  import { Grid,Stack,Box,Card,CssBaseline } from '@mui/material'
  import Auth from '@/context'
  import ButtonAppBar from '@/layout/appbar'  
  export default function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
      setSearchQuery(query);
    };
    return (
      <div>
          <CssBaseline/>
          <Auth>
              
              <ButtonAppBar onSearchChange={handleSearchChange}/>
              <ImageGallery searchQuery={searchQuery}/>
              </Auth>
              </div>
    )
  }
