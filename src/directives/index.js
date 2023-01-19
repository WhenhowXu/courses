import { useDebunceDirective } from './useDebunceDirective';
export const useDirectives = function(Vue){
    useDebunceDirective(Vue)
    return Vue;
}