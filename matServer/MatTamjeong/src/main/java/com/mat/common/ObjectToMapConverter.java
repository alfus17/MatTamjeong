package com.mat.common;

import java.lang.reflect.Method;
import java.util.HashMap;

public class ObjectToMapConverter {
	  public static HashMap<String, Object> convertObjectToMap(Object obj) {
	        HashMap<String, Object> map = new HashMap<>();
	        try {
	            // 객체의 모든 메서드를 가져옴
	            Method[] methods = obj.getClass().getMethods();
	            
	            // 메서드 중 getter를 찾아서 호출
	            for (Method method : methods) {
	                if (isGetter(method)) {
	                    String fieldName = getFieldNameFromGetter(method);
	                    Object value = method.invoke(obj);
	                    map.put(fieldName, value);
	                }
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return map;
	    }
	  

	    // Getter 메서드인지 확인 (get으로 시작하고, 반환값이 있으며 파라미터가 없어야 함)
	    private static boolean isGetter(Method method) {
	        if (!method.getName().startsWith("get")) return false;
	        if (method.getParameterCount() != 0) return false;
	        if (void.class.equals(method.getReturnType())) return false;
	        return true;
	    }

	    // getter 메서드 이름에서 필드명을 추출 (getName -> name)
	    private static String getFieldNameFromGetter(Method method) {
	        String methodName = method.getName();
	        return methodName.substring(3, 4).toLowerCase() + methodName.substring(4);
	    }

}
