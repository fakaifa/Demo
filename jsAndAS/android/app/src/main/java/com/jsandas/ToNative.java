package com.jsandas;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Yongfa on 2016/12/27.
 */

public class ToNative extends ReactContextBaseJavaModule {
    public  ReactApplicationContext mreactContext;
    public ToNative(ReactApplicationContext reactContext) {
        super(reactContext);
        mreactContext=reactContext;
    }
    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from javascript.
     */
    @Override
    public String getName() {
        return "StartActivity";
    }

    /**
     * 从js页面跳转到原生activity，并且把相应的参数传到原生端
//     *@param name  需要打开的activity的class
//     * @param params 从js端传送过来的参数
     */
    @ReactMethod
    public void startActivity(String name,String params){
        Toast.makeText(mreactContext,"---可以啦",Toast.LENGTH_SHORT).show();
        Activity currentActivity = getCurrentActivity();
            try {
                if(currentActivity!=null) {
                    Class toActivity = Class.forName(name);
                    Intent intent=new Intent(currentActivity,toActivity);
                    intent.putExtra("data",params);
                    currentActivity.startActivities(new Intent[]{intent});
                }
            } catch (Exception e) {
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : "+e.getMessage());
            }
        }
}
