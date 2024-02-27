// Interface exportable con todas sus propiedades.
export interface InfoPagina {
  titulo?: string;// (?) Puede tener o no tener un valor para titulo. 
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  equipo_trabajo?: any[];
}