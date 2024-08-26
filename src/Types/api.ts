export interface DataAPI {
  totalPages:       number;
  totalElements:    number;
  first:            boolean;
  last:             boolean;
  numberOfElements: number;
  size:             number;
  content:          Content[];
  number:           number;
  sort:             Sort;
  pageable:         Pageable;
  empty:            boolean;
}

export interface Content {
  id:           number;
  nombre:       null | string;
  encabezado:   null | string;
  texto:        null | string;
  fechaValidez: Date | null;
  activo:       null | string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}