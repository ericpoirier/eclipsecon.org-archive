/*!
 * Copyright (c) 2018 Eclipse Foundation, Inc.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 * 
 * SPDX-License-Identifier: EPL-2.0
*/

mix = require('laravel-mix');
mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

//mix.setPublicPath('static');
//mix.setResourceRoot('../');

mix.less('./less/france2018/styles.less', './content/france2018/styles.css');
mix.less('./less/france2017/styles.less', './content/france2017/styles.css');
mix.less('./less/europe2017/styles.less', './content/europe2017/styles.css');