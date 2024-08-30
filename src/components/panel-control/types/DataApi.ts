export interface DataAPI {
    id:                    number;
    username:              string;
    email:                 string;
    password:              string;
    activo:                string;
    enabled:               boolean;
    accountNonExpired:     boolean;
    accountNonLocked:      boolean;
    credentialsNonExpired: boolean;
}